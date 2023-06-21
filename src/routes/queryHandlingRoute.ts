import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express'
import QueryHandlingService from '../services/queryHandlingService'

const router = express.Router()

router.get('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const queryHandlings =
            await QueryHandlingService.getInstanceOf().findAll()
        resp.status(200).json(queryHandlings)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const existingQueryHandling =
            await QueryHandlingService.getInstanceOf().findById(req.params.id)

        if (existingQueryHandling) {
            resp.status(201).json(existingQueryHandling)
        } else {
            resp.status(404).json({
                message: `queryHandling_not_found: ${req.params.id}`,
            })
        }
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const payload = { ...req.body }
        const newQueryHandling =
            await QueryHandlingService.getInstanceOf().save(payload)
        resp.status(201).json({ ...newQueryHandling.dataValues })
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const queryHandlingId = req.params.id
        const data = await QueryHandlingService.getInstanceOf().update(
            queryHandlingId,
            {
                ...req.body,
            }
        )

        res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const queryHandlingId = req.params.id
        await QueryHandlingService.getInstanceOf().deleteByPrimaryKey(
            queryHandlingId
        )

        res.status(200).json({
            message: `queryHandling_successfully_deleted: ${queryHandlingId}`,
        })
    } catch (err) {
        next(err)
    }
})

export default router
