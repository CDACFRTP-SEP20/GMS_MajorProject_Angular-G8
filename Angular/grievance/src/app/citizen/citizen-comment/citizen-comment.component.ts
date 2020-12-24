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
  // count:Observable<any>
  // // constructor(private service : CitizenService){
  // //   this.count = this.service.getCount()

  // // }
  commentForm: FormGroup;
  commentInfo: Array<Comment> = [];
  commentDTO: Array<CommentDTO> = [];
  commentTxt: String;
  count: number = 0;
  dcount: number = 0;
  flag: number = 0;
  flag1: number = 0;
  submitted: Boolean = false;
  public id = 0;
  @Output() usercomment = new EventEmitter();
  toggle() {
    this.show = !this.show;
  }

  constructor(private formBuilder: FormBuilder, private citizenService : CitizenService) {
    this.citizenService.getAllComment().subscribe( res => {
      this.commentDTO = res;
      console.log(this.commentDTO);
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
  onSubmit() {
    this.commentInfo.push({
      commentId: this.id++,
      currentDate: new Date(),
      commentTxt: this.commentForm.controls['comment'].value,
      replyComment: [],
    });
    this.commentTxt = '';
    this.usercomment.emit(this.commentInfo);
  }
  // Increasing Like
  countLike(): number {
    if (this.flag === 0) {
      if (this.flag1 === 1) {
        this.dcount = 0;
        this.flag1=0;
      } 
      this.count++;
      this.flag = 1;
    } else {
      this.count--;
      this.flag = 0;
    }
    return this.flag;
  }

  // Decreasing Like
  countDislike(): number {
    if (this.flag1 === 0) {
      if (this.countLike() === 1) {
        this.count = 0;
        this.flag=0;
      } 
      this.dcount++;
      this.flag1 = 1;
    } else {
      this.dcount--;
      this.flag1 = 0;
    }
    return this.flag1;
  }

//submitting like


  
}

