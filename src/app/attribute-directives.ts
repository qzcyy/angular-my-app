
import { Directive,ElementRef,Input,HostListener } from "@angular/core";



@Directive({
  selector:"[myHighlight]"
})
export class HighlightDirective {
  @Input('myHighlight') highlightColor:string;
  constructor(private el:ElementRef){}
  @HostListener('mouseenter') onMouseEnter(){
    this.hightLight(this.highlightColor||"red");
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hightLight(null);
  }
  private hightLight(color:string){
    this.el.nativeElement.style.backgroundColor=color
  }
}
