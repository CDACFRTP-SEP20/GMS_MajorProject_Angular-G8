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
  styleUrls: ['./citizen-comment.component.css'],
})
export class CitizenCommentComponent implements OnInit {
  public show: boolean = false;
  compStatus: Array<any> = [];
  citizenId = localStorage.getItem('citizenId');
  commentForm: FormGroup;
  commentInfo: Array<Comment> = [];
  commentDTO: Array<any> = [];
  commentTxt: Array<any> = [];
  likeDislikeInfo: Array<any> = [];
  count = 0;
  dcount: number = 0;
  flag: Array<any> = [0, 0, 0, 0, 0, 0, 0,0,0];
  flag1:Array<any> = [0, 0, 0, 0, 0, 0, 0,0,0];
  submitted: Boolean = false;
  showCommentIndex: number;
  index: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private citizenService: CitizenService
  ) {
    this.citizenService.getAllComment().subscribe((res) => {
      this.commentDTO = res;
      console.log(this.commentDTO);
    });
    this.citizenService.getAllComplain().subscribe((res) => {
      this.compStatus = res;
      console.log(this.compStatus);
    });
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
  onSubmit(i: any, complainId: any) {
    this.commentInfo.push({
      citizenId: this.citizenId,
      compId: complainId,
      commentId: i,
      commentTxt: this.commentForm.controls['comment'].value,
    });

    console.log(this.commentInfo);
    this.citizenService
      .postComment(this.commentInfo)
      .subscribe((data) => console.log(data));

    this.commentTxt = [];
  }
  // Increasing Like
  // countLike(index: number, complainId: any,ch:string) {
  //   this.likeDislikeInfo.push({
  //     citizenId: this.citizenId,
  //     like: this.like(index),
  //     dislike: this.disLike(index),
  //     compId: complainId,
  //   });
  // }

  // countDisLike(index: number, complainId: any) {
  //   this.likeDislikeInfo.push({
  //     citizenId: this.citizenId,
  //     like: this.compStatus.like,
  //     dislike: this.disLike(index),
  //     compId: complainId,
  //   });
  // }

  //posting like
  like(index: number, complainId: any) : number {
    if (this.flag[index] === 0) {
      console.log("flag 1 value"+this.flag1[index])
      //checking if disliked already
      if (this.flag1[index] === 1) {
        this.compStatus[index].disLike =
        parseInt(this.compStatus[index].disLike) - 1;
            this.flag1[index]=0;
            let likedisDto = new LikeDislikeDTO();
      likedisDto.citizenId = this.citizenId;
      likedisDto.compId = complainId;
      likedisDto.like = 0;
      likedisDto.dislike = 0;
     
      this.citizenService.deleteDislike(likedisDto).subscribe(res=>console.log(res))
          }
      this.compStatus[index].like = parseInt(this.compStatus[index].like) + 1;
      this.flag[index] = 1;
      let likedisDto = new LikeDislikeDTO();
      likedisDto.citizenId = this.citizenId;
      likedisDto.compId = complainId;
      likedisDto.like = 1;
      likedisDto.dislike = 0;

      console.log(likedisDto);

      this.citizenService
        .submitLike(likedisDto)
        .subscribe((data) => console.log(data));
    } else {
      this.compStatus[index].like = parseInt(this.compStatus[index].like) - 1;
      this.flag[index] = 0;
      let likedisDto = new LikeDislikeDTO();
      likedisDto.citizenId = this.citizenId;
      likedisDto.compId = complainId;
      likedisDto.like = 0;
      likedisDto.dislike = 0;
      this.citizenService
        .deleteLike(likedisDto)
        .subscribe((data) => console.log(data));
    }
    return this.flag[index]
  }

  // dislike
  dislike(index: number, complainId: any) {
   
    
    if (this.flag1[index] === 0) {
      //checking if liked already
      if (this.like(index,complainId) === 1) {
             this.compStatus[index].like = parseInt(this.compStatus[index].like) - 1;
              this.flag[index]=0;
              let likedisDto = new LikeDislikeDTO();
              likedisDto.citizenId = this.citizenId;
              likedisDto.compId = complainId;
              likedisDto.like = 0;
              likedisDto.dislike = 0;
              this.citizenService
                .deleteLike(likedisDto)
                .subscribe((data) => console.log(data));
            }
      this.compStatus[index].disLike =
        parseInt(this.compStatus[index].disLike) + 1;
      this.flag1[index] = 1;

      let likedisDto = new LikeDislikeDTO();
      likedisDto.citizenId = this.citizenId;
      likedisDto.compId = complainId;
      likedisDto.like = 0;
      likedisDto.dislike = 1;
      console.log(likedisDto);
      this.citizenService
        .submitDislike(likedisDto)
        .subscribe((data) => console.log(data));
    } else {
      this.compStatus[index].disLike =
        parseInt(this.compStatus[index].disLike) - 1;
      this.flag1[index] = 0;
      let likedisDto = new LikeDislikeDTO();
      likedisDto.citizenId = this.citizenId;
      likedisDto.compId = complainId;
      likedisDto.like = 0;
      likedisDto.dislike = 0;
     
      this.citizenService.deleteDislike(likedisDto).subscribe(res=>console.log(res))
    }

    return this.flag1[index]
  }

  //   this.commentDTO[index].isLiked  =0;
  //  this.commentDTO[index].+=1;
  // if (this.flag === 0) {
  //   if (this.flag1 === 1) {
  //     this.compStatus[index].dislike = parseInt(this.compStatus[index].dislike) - 1;;
  //     this.flag1=0;
  //   }
  //   this.compStatus[index].like = parseInt(this.compStatus[index].like) + 1;
  //   this.flag = 1;
  // } else {
  //   this.compStatus[index].like = parseInt(this.compStatus[index].like) - 1;;
  //   this.flag = 0;
  // }
  //   // return this.flag;
  // }

  // Decreasing Like
  // countDislike(): number {
  //   if (this.flag1 === 0) {
  //     if (this.countLike() === 1) {
  //      this.compStatus[index].like = parseInt(this.compStatus[index].like) - 1;
  //       this.flag=0;
  //     }
  //     this.compStatus[index].dislike = parseInt(this.compStatus[index].dislike) + 1;
  //     this.flag1 = 1;
  //   } else {
  //     this.compStatus[index].dislike = parseInt(this.compStatus[index].dislike) - 1;
  //     this.flag1 = 0;
  //   }
  //   return this.flag1;
  // }

  //submitting like
}
