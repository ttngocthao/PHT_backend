"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dailyNote_1 = __importDefault(require("./routes/dailyNote"));
const mealNote_1 = __importDefault(require("./routes/mealNote"));
dotenv.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
const mongoDBUrl = (_a = (process.env.NODE_ENV === 'dev' ? process.env.DEV_MONGODB : process.env.NODE_ENV === 'production' ? process.env.PROD_MONGODB : '')) !== null && _a !== void 0 ? _a : '';
mongoose_1.default.connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
app.get('/', (_req, res) => {
    res.send('personal health tracker');
});
app.use('/api/dailyNotes', dailyNote_1.default);
app.use('/api/mealNotes', mealNote_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running @ ${PORT}`);
});
