"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dailyNote_1 = __importDefault(require("../services/dailyNote"));
const convertReqToDailyNote_1 = require("../utils/convertReqToDailyNote");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    //const currentUser ='mum';//!for future if there are more than a users
    dailyNote_1.default.getAll()
        .then(result => res.status(200).json(result))
        .catch(error => console.log(error));
});
router.get('/:id', (_req, res) => {
    dailyNote_1.default.getById(_req.params.id)
        .then(result => res.status(200).json(result))
        .catch(error => console.log(error));
});
router.post('/', (_req, res) => {
    //todo: convert _req.body to the proper type before sending
    const newDailyNote = convertReqToDailyNote_1.convertReqToDailyNote(_req.body);
    dailyNote_1.default.add(newDailyNote)
        .then(result => res.status(201).json(result))
        .catch(err => console.log(err));
});
router.post('/update/:id', (_req, res) => {
    const noteId = _req.params.id;
    dailyNote_1.default.update(noteId, _req.body).then(result => res.status(200).json(result)).catch(err => console.log(err));
});
exports.default = router;
