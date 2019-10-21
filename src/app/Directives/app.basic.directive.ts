import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[basicdirective]"
})
export class BasicDirective {
  //input fields
  @Input("basicdirective") highlightColor: string;
  constructor(private el: ElementRef) {
    //elRef.nativeElement.innerHTML = "Bye";
    //this.highlight("orange");
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  private highlight(color: string) {
    console.log(color);
    this.el.nativeElement.style.backgroundColor = color;
  }
}
