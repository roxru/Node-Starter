import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express'
import EmployeeService from '../services/employeeService'

const router = express.Router()

router.get('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const employees = await EmployeeService.getInstanceOf().findAll()
        resp.status(200).json(employees)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const existingEmployee = await EmployeeService.getInstanceOf().findById(
            req.params.id
        )

        if (existingEmployee) {
            resp.status(201).json(existingEmployee)
        } else {
            resp.status(404).json({
                message: `employee_not_found: ${req.params.id}`,
            })
        }
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const payload = { ...req.body }
        const newEmployee = await EmployeeService.getInstanceOf().save(payload)
        resp.status(201).json({ ...newEmployee.dataValues })
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const employeeId = req.params.id
        const data = await EmployeeService.getInstanceOf().update(employeeId, {
            ...req.body,
        })

        res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const employeeId = req.params.id
        await EmployeeService.getInstanceOf().deleteByPrimaryKey(employeeId)

        res.status(200).json({
            message: `employee_successfully_deleted: ${employeeId}`,
        })
    } catch (err) {
        next(err)
    }
})

export default router
