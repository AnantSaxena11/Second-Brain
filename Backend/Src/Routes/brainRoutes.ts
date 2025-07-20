import {Router} from "express"

export const brainRoutes : Router = Router();

brainRoutes.post('/share',publicLink);
brainRoutes.get('/shareLink',othersBrain);