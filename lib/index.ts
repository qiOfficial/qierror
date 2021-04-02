import {Subject} from "rxjs";

export type ContainerType = 'UI' | 'Service' | 'Class';
export type ErrorSeverity = 'Catastrophic' | 'ContainerBroken' | 'MethodBroken' | 'Warning';
export type QIError = {
  containerName?: string,
  containerType?: ContainerType,
  methodName?: string,
  errorDetails?: string,
  showToUser?: boolean,
  sendToBackend?: boolean,
  errorSeverity?: ErrorSeverity,
  fixSuggestion?: string,
  wikiLink?: string
};

export class QiErrorHandler {
  private errors$: Subject<QIError> = new Subject<QIError>();
  public getErrors(): Subject<QIError> {return this.errors$;}
  
  /****************************************************************************************
  * Public Interface
  ****************************************************************************************/
  /**
   * @method
   * @description
   * Handles new error
   * @param errorDetails {QIError} relevant error details
  **/
  public throw(errorDetails: QIError): void {
    this.errors$.next(errorDetails);
  }
}

const qiErrorHandler: QiErrorHandler = new QiErrorHandler();
export default qiErrorHandler;