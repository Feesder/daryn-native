import { makeAutoObservable } from "mobx";

class CameraAction {
    cameraRef: any

    constructor() {
        makeAutoObservable(this)
    }
}

export default new CameraAction();