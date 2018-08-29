import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export const products: any[] = [
    {
        type: 'Hotel',
        address: '',
        title: '',
        phone: '',
        bgImage: '',
        twiImage: '',
        twiFollowers: 3670,
        twiFollowing: 345,
        airTemp: 14,
        waterTemp: 20
    }
];

export const products$: Observable<any[]> = of(products)
    .pipe(
        delay(600)
    );
