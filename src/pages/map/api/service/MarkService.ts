import $api from "shared/api/http";
import { Mark } from "shared/api/model/Mark";

class MarkService {
    getMarks() {
        return $api.get<Mark[]>('api/v1/mark')
    }
}

export default new MarkService();