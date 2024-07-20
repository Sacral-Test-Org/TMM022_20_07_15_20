export class GlobalParameters {
  static GLOBAL_PARAMETER_INITIAL_VALUE: number = 0;
  static EDIT_MODE: number = 1;
  static LOV_SELECTION_PARAM: number = 0;

  static getGlobalParameter(parameterName: string): number {
    switch (parameterName) {
      case 'GLOBAL_PARAMETER_INITIAL_VALUE':
        return GlobalParameters.GLOBAL_PARAMETER_INITIAL_VALUE;
      case 'EDIT_MODE':
        return GlobalParameters.EDIT_MODE;
      case 'LOV_SELECTION_PARAM':
        return GlobalParameters.LOV_SELECTION_PARAM;
      default:
        throw new Error('Invalid parameter name');
    }
  }
}