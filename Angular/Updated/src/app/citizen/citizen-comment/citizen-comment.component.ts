import { LikeDislikeDTO } from './../../models/like-dislike-dto';
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
  username=sessionStorage.getItem('username')
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
  flag: Array<any> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  flag1: Array<any> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  submitted: Boolean = false;
  showCommentIndex: number;
  index: number = 1;
  page: number = 1
  totalRecords: number


  constructor(
    private formBuilder: FormBuilder,
    private citizenService: CitizenService
  ) {
    this.citizenService.getAllComment().subscribe((res) => {
      this.commentDTO = res;
    });
    this.citizenService.getAllComplain().subscribe((res) => {
      this.compStatus = res;
    });
  }

  ngOnInit() {
    this.createForm();
  }

  // creating form
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


    this.citizenService
      .postComment(this.commentInfo)
      .subscribe()
    this.commentTxt = [];
  }


  //posting like
  like(index: number, complainId: any): number {
    if (this.flag[index] === 0) {
      //checking if disliked already
      if (this.flag1[index] === 1) {
        this.compStatus[index].disLike =
          parseInt(this.compStatus[index].disLike) - 1;
        this.flag1[index] = 0;
        let likedisDto = new LikeDislikeDTO();
        likedisDto.citizenId = this.citizenId;
        likedisDto.compId = complainId;
        likedisDto.like = 0;
        likedisDto.dislike = 0;

        this.citizenService.deleteDislike(likedisDto).subscribe()
      }
      this.compStatus[index].like = parseInt(this.compStatus[index].like) + 1;
      this.flag[index] = 1;
      let likedisDto = new LikeDislikeDTO();
      likedisDto.citizenId = this.citizenId;
      likedisDto.compId = complainId;
      likedisDto.like = 1;
      likedisDto.dislike = 0;


      this.citizenService
        .submitLike(likedisDto)
        .subscribe();
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
        .subscribe();
    }
    return this.flag[index]
  }

  // posting dislike
  dislike(index: number, complainId: any) {
    if (this.flag1[index] === 0) {
      //checking if liked already
      if (this.like(index, complainId) === 1) {
        this.compStatus[index].like = parseInt(this.compStatus[index].like) - 1;
        this.flag[index] = 0;
        let likedisDto = new LikeDislikeDTO();
        likedisDto.citizenId = this.citizenId;
        likedisDto.compId = complainId;
        likedisDto.like = 0;
        likedisDto.dislike = 0;
        this.citizenService
          .deleteLike(likedisDto)
          .subscribe();
      }
      this.compStatus[index].disLike =
        parseInt(this.compStatus[index].disLike) + 1;
      this.flag1[index] = 1;

      let likedisDto = new LikeDislikeDTO();
      likedisDto.citizenId = this.citizenId;
      likedisDto.compId = complainId;
      likedisDto.like = 0;
      likedisDto.dislike = 1;
      this.citizenService
        .submitDislike(likedisDto)
        .subscribe();
    } else {
      this.compStatus[index].disLike =
        parseInt(this.compStatus[index].disLike) - 1;
      this.flag1[index] = 0;
      let likedisDto = new LikeDislikeDTO();
      likedisDto.citizenId = this.citizenId;
      likedisDto.compId = complainId;
      likedisDto.like = 0;
      likedisDto.dislike = 0;

      this.citizenService.deleteDislike(likedisDto).subscribe()
    }

    return this.flag1[index]
  }
}
