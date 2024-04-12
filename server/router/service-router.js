import { Router } from 'express'
import { getSingleService, service, updateSingleService } from '../controlers/service-controller.js'
import admin_middleware from '../middlewares/admin-middleware.js'
import jwtvarifyMiddleware from '../middlewares/jwtvarify-middleware.js'

const router = Router()

router.route('/service').get(service)
router.route('/service/:id').get(jwtvarifyMiddleware, admin_middleware,  getSingleService)
router.route('/service/update/:id').get(jwtvarifyMiddleware, admin_middleware, updateSingleService)
router.route('/service/delete/:id').get(jwtvarifyMiddleware, admin_middleware, updateSingleService)

export default router