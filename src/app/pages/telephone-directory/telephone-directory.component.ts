import { Component,OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { TelephoneDirectoryService } from 'src/app/services/telephone-directory.service';

export interface UsersData {
  fullname: string;
  phonenumber : string;
  email : string;
  id: number;
}

@Component({
  selector: 'app-telephone-directory',
  templateUrl: './telephone-directory.component.html',
  styleUrls: ['./telephone-directory.component.css']
})
export class TelephoneDirectoryComponent implements OnInit{

  displayedColumns: string[] = ['id', 'fullname','phonenumber','email', 'action'];
  dataSource;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog: MatDialog, public telephoneDirectory: TelephoneDirectoryService,) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
      this.telephoneDirectory.getTelephoneDirectory().subscribe((res) =>{
        this.dataSource = res
      });
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      fullname:row_obj.fullname,
      phonenumber:row_obj.phonenumber,
      email: row_obj.email
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.fullname = row_obj.fullname;
        value.phonenumber = row_obj.phonenumber;
        value.email= row_obj.email;
        
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }

}
