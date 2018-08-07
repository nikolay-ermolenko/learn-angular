import { Component, HostBinding, OnInit, Input, Output } from '@angular/core';

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

    }

    public get fontSize(): number {
        return this._fontSize;
    }
    public set fontSize(value: number) {
        this._fontSize = value;
    }
}
