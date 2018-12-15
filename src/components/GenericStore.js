import { observable } from "mobx";

class GenericStore {
    data = observable([{ property1: 'value1', property2: 'value2' }]);
    addData(data){
        this.data.push(data);
    }
    updateData(index,newValue){
        this.data[index].property1 = newValue;
    }
}

const store = window.store =new GenericStore();
export default store;