import { Component, HostBinding, OnInit, Input, Output } from '@angular/core';
import { Observable, Observer, pipe, Subject } from 'rxjs';
import { map, filter } from 'rxjs/internal/operators';
import { from } from 'rxjs//internal/observable/from'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


    @HostBinding('style.fontSize.px')
    private _fontSize: number = 17;

    title = 'angular';

    public ngOnInit(): void {

        const obs$: Observable<number> = Observable.create((observer: Observer<number>) => {
            let count: number = 0;
            setInterval(() => {
                if (count === 5) {
                    observer.complete();
                }
                observer.next(count++);
            }, 1000);

        });

        obs$.subscribe(
            (val: number) => {
                console.log(`SUB1 ${val}`);
            },
            () => { },
            () => {
                console.log('END');
            }
        );

        setTimeout(() => {
            obs$.subscribe((val: number) => {
                console.log(`SUB2 ${val}`);
            });
        }, 8000);



        const seq1$: Observable<number> = from([1, 4, 5, 6, 7]);
        seq1$
            .pipe(
                map((val) => {
                    return val * 2;
                }),
                filter((val) => val > 5)
            ).subscribe((val) => {
                console.log(val);

            })


        const sbj$$: Subject<number | string> = new Subject();
        sbj$$.next(1);
        sbj$$.next(12);
        sbj$$.subscribe((n) => {
            console.log(1, n);

        })
        setTimeout(() => {
            sbj$$.next('ASDASDASDASDASDASDAD');
        }, 5000);

    }

    public get fontSize(): number {
        return this._fontSize;
    }
    public set fontSize(value: number) {
        this._fontSize = value;
    }
}
