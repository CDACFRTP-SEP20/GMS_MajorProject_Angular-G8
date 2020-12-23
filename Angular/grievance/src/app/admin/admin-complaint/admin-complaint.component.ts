import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-complaint',
  templateUrl: './admin-complaint.component.html',
  styleUrls: ['./admin-complaint.component.css']
})
export class AdminComplaintComponent implements OnInit {
 d1=1
 d2=20
 d3=30 
 counts:any[]=[];
 constructor(private adminservice:AdminService,private route:Router) {  }

 getCounts(){
     //@ts-ignore
     this.adminservice.getComplaintCount().subscribe(
      data=>{
      console.log(data)
      //@ts-ignore
     this.counts=data
     //@ts-ignore
     console.log(this.counts[0])
       //@ts-ignore
     this.d1=this.counts[0]
   }
   )
  
  
   var myDoughnutChart = new Chart("ctx", {
    type: 'doughnut',
    data:{
      labels: [
        this.counts[0],this.counts[1],this.counts[2]
         
      ],
      datasets: [{
         //@ts-ignore
         data:[ this.counts[0],this.counts[1],this.counts[2]],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
     
      
  },
    options: {
      responsive: true,
      legend: {
        display: false
      },
     
    }
  });
 }
 

  ngOnInit(): void {
   
  }

}
