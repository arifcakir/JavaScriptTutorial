class StudentListView
{
    constructor(studentList)
    {

        this._studentList=studentList;
        this._student=new Student();

        this._student.FullName=document.querySelector("#FullName");
        this._student.StudentId=document.querySelector("#StudentId");


        
    }


updateList(){
    /**buraya ekrandaki listeyi update edecek kod gelmeli */
    alert("merhaba");
};








}