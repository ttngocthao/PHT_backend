"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import {
//   format,
//   startOfWeek,
//   addDays,
//   isSameDay,
//   lastDayOfWeek,
//   getWeek,
//   addWeeks,
//   subWeeks
// } from "date-fns";
const mealNote_1 = __importDefault(require("../services/mealNote"));
const convertReqToMealNote_1 = require("../utils/convertReqToMealNote");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    mealNote_1.default.getAll()
        .then(result => res.status(200).json(result))
        .catch(error => console.log(error));
});
// router.get('/weekly',(_req,res)=>{
//    const query = _req.query;//from=Mon17May21&to=Sun23May21
//     const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
//     const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
// });
router.get('/:id', (_req, res) => {
    mealNote_1.default.getById(_req.params.id)
        .then(result => res.status(200).json(result))
        .catch(error => console.log(error));
});
router.post('/', (_req, res) => {
    //!convert _req.body to the proper type before sending
    const newMealNote = convertReqToMealNote_1.convertReqToMealNote(_req.body);
    mealNote_1.default.add(newMealNote)
        .then(result => res.status(200).json(result))
        .catch(error => console.log(error));
});
router.post('/:id', (_req, res) => {
    const mealNoteId = _req.params.id;
    mealNote_1.default.edit(mealNoteId, _req.body)
        .then(result => res.status(200).json(result))
        .catch(error => console.log(error));
});
exports.default = router;
