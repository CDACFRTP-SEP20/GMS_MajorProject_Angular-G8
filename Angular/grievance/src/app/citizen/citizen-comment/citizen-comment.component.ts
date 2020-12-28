import { count } from 'rxjs/operators';
import { LikeDislikeDTO } from './../../models/like-dislike-dto';
import { ComplaintStatusDto } from './../../models/complaint-status-dto';
import { CommentDTO } from './../../models/comment-dto';
import { CitizenService } from './../../service/citizen.service';
import { Comment } from './../../models/comment';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-citizen-comment',
  templateUrl: './citizen-comment.component.html',
  styleUrls: ['./citizen-comment.component.css']
})
export class CitizenCommentComponent implements OnInit {
  public show: boolean = false;
  compStatus:Array<any>=[]
  citizenId =  localStorage.getItem('citizenId');
  commentForm: FormGroup;
  commentInfo: Array<Comment> = [];
  commentDTO: Array<CommentDTO> = [];
  commentTxt: Array<any>=[];
  likeDislikeInfo:Array<LikeDislikeDTO>=[];
  count=0;
  dcount: number = 0;
  flag: number = 0;
  flag1: number = 0;
  submitted: Boolean = false;
  showCommentIndex:number;
  LikeDislikeDTO: Array<LikeDislikeDTO> = [];
  index:number = 1;

  constructor(private formBuilder: FormBuilder, private citizenService : CitizenService) {
    this.citizenService.getAllComment().subscribe( res => {
      this.commentDTO = res;
      console.log(this.commentDTO);
    })
    this.citizenService.getAllComplain().subscribe( res => {
      this.compStatus = res;
      console.log(this.compStatus);
    })

  }

  ngOnInit() {
    console.log();
    this.createForm();
  }
// craeting form
  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: [''],
    });
  }
// Posting comment
  onSubmit(i:any,complainId:any) {
    this.commentInfo.push({
      citizenId : this.citizenId,
      compId:complainId,
      commentId: i,
      commentTxt: this.commentForm.controls['comment'].value,
     });
     console.log(this.commentInfo)
     this.citizenService.postComment(this.commentInfo).subscribe(data=> console.log(data))

    this.commentTxt = [];
    
    
  }
  // Increasing Like
  countLike(index:number,complainId:any) {
 
    this.likeDislikeInfo.push({
      citizenId : this.citizenId,
      like: this.Like(index),
      dislike: this.dcount ,
      compId: complainId
     });
    }


    Like(index:number) : number {
      console.log(index)
      console.log(this.commentDTO[index].like)
      //@ts-ignore
      this.commentDTO[index].like  = parseInt(this.commentDTO[index].like)+1;
      console.log(this.commentDTO[index].like)
      //@ts-ignore
      return this.commentDTO[index].like ;
       
    }






    
  //   this.commentDTO[index].isLiked  =0;
     //  this.commentDTO[index].+=1;
    // if (this.flag === 0) {
    //   if (this.flag1 === 1) {
    //     this.dcount = 0;
    //     this.flag1=0;
    //   } 
    //   this.count++;
    //   this.flag = 1;
    // } else {
    //   this.count--;
    //   this.flag = 0;
    // }
  //   // return this.flag;
  // }

  // Decreasing Like
  // countDislike(): number {
  //   if (this.flag1 === 0) {
  //     if (this.countLike() === 1) {
  //       this.count = 0;
  //       this.flag=0;
  //     } 
  //     this.dcount++;
  //     this.flag1 = 1;
  //   } else {
  //     this.dcount--;
  //     this.flag1 = 0;
  //   }
  //   return this.flag1;
  // }

//submitting like


  
}

