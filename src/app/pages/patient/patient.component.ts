import { Component ,} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DocService } from 'src/app/service/doc.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {
  patientForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Phone: new FormControl(''),
    Date: new FormControl(''),
    Gender: new FormControl(''),
    Payment: new FormControl('')
  })
 constructor(private _docService:DocService){}
  onFormSubmit(){
    if(this.patientForm.valid)
    {
      this._docService.addPatient(this.patientForm.value).subscribe({
        next:(val:any)=>{
          alert('patient request send');
        },
        error:(err:any)=>{
          console.error(err);
        }
      })
    }
  } 

  prices: string[] = [
    'Neurology-300$',
    'Cardiology-200$',
    'Radiology-250$',
    'Surgeon-1000$',
    'Psychatrist-150$',

  ];
}
