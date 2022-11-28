const {Router} = require ("express")
const router = Router();
const movieCtrl = require("../controller/movies.controller")


router.post("/movie", movieCtrl.postMovie);
router.post("/movie/actor", movieCtrl.postActor);
router.post("/movie/director", movieCtrl.postDirector);
router.post("/movie/guionista", movieCtrl.postGuionista);


router.get("/movie", movieCtrl.getMovie);
router.get("/movie/actor", movieCtrl.getActor);
router.get("/movie/director", movieCtrl.getDirector);
router.get("/movie/guionista", movieCtrl.getGuionista);
router.get("/movie/producer", movieCtrl.getProducer);


router.put("/movie", movieCtrl.putMovie);


router.delete("/movie", movieCtrl.deleteMovie);
router.delete("/movie/actor", movieCtrl.deleteActor);
router.delete("/movie/director", movieCtrl.deleteDirector);
router.delete("/movie/guionista", movieCtrl.deleteGuionista);




module.exports = router;