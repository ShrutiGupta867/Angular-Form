
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  //public form:any;
  public buttonName1: any = 'Form';
  public buttonName2: any = 'Table';
  public showForm = false;
  public table: boolean = false;
  firestore: any;
  formData: any;
  fsname: any;
  lsname: any;
  dob: any;
  phone: any;
  address: any;
  email: any;
  data: any;
  t: any;
  data1: any;
  form1: any;


  //constructor(){}

  ngOnInit(): void {
    this.formData = new FormGroup({
      fsname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])')]),
      lsname: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      // let month=inputMonth.value,
      // let year=inputMonth.value,
      // let date=inputMonth.value,

      // ),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('(?=.*[0-9])')]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  toggle1() {


    // CHANGE THE NAME OF THE BUTTON.
    if (this.buttonName1 == 'Form') {
      this.data1 = 'formData';
      this.buttonName1 = "Hide";
    }
    else if (this.buttonName1 == 'Hide') {
      this.data1 = '';
      this.buttonName1 = "Form";
    }
  }


  toggle2() {
    this.table = !this.table;
    if (this.table)
      this.buttonName2 = "Hide";
    else
      this.buttonName2 = "Table";
  }

  get f() {
    return this.formData.controls;
  }

  userData: any = [{
    fsname: '',
    lsname: '',
    dob: '',
    phone: '',
    address: '',
    email: ''

  }]

  onClickSubmit() {
    const studentData = {
      fsname: this.formData.value.fsname,
      lsname: this.formData.value.lsname,
      dob: this.formData.value.dob,
      phone: this.formData.value.phone,
      address: this.formData.value.address,
      email: this.formData.value.email,
    }

    // this.userData.push(studentData);

    // alert('Form submit Successfully');
    // this.formData.reset();
    // this.data1 = '';
    // console.log(studentData['fsname'])

    if (studentData['fsname'] != '' && studentData['lsname'] != '' && studentData['dob'] != '' && studentData['phone'] != '' && studentData['address'] != '' && studentData['email'] != '') 
    { 
      alert("Form submit Successfully !!!");
      this.userData.push(studentData);
      this.formData.reset();
      this.data1 = '';
    }
    else {
      alert("Not Successfull Please try again.");
    }


  }

  editUser(j: any) {
    this.data1 = 'form1'
    console.log(j)
    this.t = j
    this.fsname = this.userData[j].fsname
    this.lsname = this.userData[j].lsname
    this.dob = this.userData[j].dob
    this.phone = this.userData[j].phone
    this.address = this.userData[j].address
    this.email = this.userData[j].email

    this.form1 = new FormGroup({
      fsname: new FormControl(this.fsname),
      lsname: new FormControl(this.lsname),
      dob: new FormControl(this.dob),
      phone: new FormControl(this.phone),
      address: new FormControl(this.address),
      email: new FormControl(this.email),
    });

    // this.form1['First Name']=this.fsname
    //console.log(this.form1.value.fsname = this.fsname)


  }


  update() {
    const data = {
      fsname: this.form1.value.fsname,
      lsname: this.form1.value.lsname,
      dob: this.form1.value.dob,
      phone: this.form1.value.phone,
      address: this.form1.value.address,
      email: this.form1.value.email,
    }
    console.log(this.t)
    this.userData.splice(this.t, 1, data)
    this.fsname = ''
    this.lsname = ''
    this.dob = ''
    this.phone = ''
    this.address = ''
    this.email = ''
    this.data1 = ''

    alert('Data updated successfully');

  }
  deleteUser(j: any) {
    alert('Are you sure want to delete?')
    this.userData.splice(j, 1)
  }
}

