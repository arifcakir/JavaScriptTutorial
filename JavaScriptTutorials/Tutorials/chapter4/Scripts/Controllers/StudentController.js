class StudentController{
/**@param: */
    constructor(){


        /**burası bir api den gelebilir. */
        this._studentList = [];

        this._studentListModel= new StudentListModel(this._studentList);
        this._studentListView=new StudentListView(this._studentList);

        this._studentListModel.subscribeToObservable(this._studentListView);
    }


}