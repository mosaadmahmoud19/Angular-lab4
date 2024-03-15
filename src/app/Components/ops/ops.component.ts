import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subscribable,
  Subscription,
  first,
  fromEvent,
  map,
  of,
} from 'rxjs';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-ops',
  standalone: true,
  imports: [],
  templateUrl: './ops.component.html',
  styleUrl: './ops.component.css',
})
export class OpsComponent implements OnInit, OnDestroy {
  observable3: Observable<any> = new Observable();
  subsription!: Subscription;



  ngOnInit() {
    

    this.observable3 = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        if (count == 3) observer.complete();
        observer.next({ name: 'HI', count });
        count++;
      }, 1000);
    });

    this.subsription = this.observable3.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });

  }

  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }
}
