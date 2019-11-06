import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordslist',
  templateUrl: './wordslist.component.html',
  styleUrls: ['./wordslist.component.css']
})
export class WordslistComponent implements OnInit {
    arrWords = [
      { id: 1, en: 'action', vn: 'hành động', memorized: true },
      { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
      { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
      { id: 4, en: 'active', vn: 'chủ động', memorized: true },
      { id: 5, en: 'bath', vn: 'tắm', memorized: false },
      { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
    ];
    newEn = '';
    newVn = '';
    isShowForm = false;
    filterStatus = "";
  constructor() { }
  addNewWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.newEn = "";
    this.newVn = "";
    this.isShowForm = false;
  }
  removeWord(id: number) {
    const idWord = this.arrWords.findIndex(w => w.id === id);
    this.arrWords.splice(idWord , 1);
  }
  getShowStatus(memorized: boolean){
    const seeAllWords = this.filterStatus === 'SEE_ALL';
    const rememWord = this.filterStatus === 'SEE_REMEMBERED_WORD' && memorized;
    const unrememWord = this.filterStatus === 'SEE_UNREMEMBERED_WORD' && !memorized;

    return seeAllWords || rememWord || unrememWord;

  }

  ngOnInit() {

  }

}
