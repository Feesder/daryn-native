import { makeAutoObservable } from "mobx";
import { Mark } from "shared/api/model/Mark";

class DirectionsStore {
    directions: Mark[] = [] as Mark[]

    consturctor() {
        makeAutoObservable(this)
    }
}

export default new DirectionsStore();