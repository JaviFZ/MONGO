const {Router} = require ("express")
const router = Router();
const profCtrl = require("../controller/professional.controller")





router.get("/prof", profCtrl.getProf);

router.post("/prof", profCtrl.postProf);

router.put("/prof", profCtrl.putProf);

router.delete("/prof", profCtrl.deleteProf);



module.exports = router;