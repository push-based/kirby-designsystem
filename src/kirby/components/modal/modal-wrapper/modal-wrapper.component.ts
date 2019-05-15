import { Component, ElementRef, ViewChild, AfterViewInit, Injector } from '@angular/core';
import { NavParams } from '@ionic/angular';

import { ModalWrapperConfig } from './config/modal-wrapper-config';
import { COMPONENT_PROPS, ModalWrapperConfigHelper } from './config/modal-wrapper-config.helper';
import { IModalController } from '../services/modal.controller.interface';

@Component({
  templateUrl: './modal-wrapper.component.html',
  styleUrls: ['./modal-wrapper.component.scss'],
})
export class ModalWrapperComponent implements AfterViewInit {
  @ViewChild('modalWrapper') modalWrapper: ElementRef;
  scrollY: number = Math.abs(window.scrollY);
  config: ModalWrapperConfig;
  componentPropsInjector: Injector;

  constructor(
    private params: NavParams,
    private modalController: IModalController,
    injector: Injector
  ) {
    this.config = ModalWrapperConfigHelper.processOptionalValues(this.params.get('config'));
    this.componentPropsInjector = Injector.create({
      providers: [{ provide: COMPONENT_PROPS, useValue: this.params.get('config').componentProps }],
      parent: injector,
    });
  }

  ngAfterViewInit(): void {
    const el = this.modalWrapper.nativeElement;
    setTimeout(() => {
      el.focus();
      el.blur();
    }, 50);
  }

  onFocusChange() {
    // This fixes an undesired scroll behaviour occurring on keyboard-tabbing
    window.scrollTo({ top: this.scrollY });
  }

  onModalDismiss(e: any) {
    // Handle key press, due to:
    // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#Required_JavaScript_Features
    if (e && e.keyCode && e.keyCode !== 32 && e.keyCode !== 13) {
      return;
    }
    this.modalController.hideTopmost();
  }
}
