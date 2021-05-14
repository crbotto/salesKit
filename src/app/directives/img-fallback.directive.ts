//This directive is used to provide a default thumbnail when the loading of the item's thumbnail fails
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgFallback]'
})
export class ImgFallbackDirective {
  @Input() appImgFallback: string;

  constructor( private eRef: ElementRef ) { }
  @HostListener('error')
    loadFallbackOnError() {
      const element: HTMLImageElement = <HTMLImageElement>this.eRef.nativeElement;
      element.src = '/assets/defaultThumbnail.png';
    }
}
