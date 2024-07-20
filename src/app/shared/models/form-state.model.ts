export class FormState {
  formName: string;
  currentDate: Date;
  globalParameter: number;
  mode: string;
  cursorStyle: string;
  saveButtonDisabled: boolean;
  fieldsEnabled: { [key: string]: boolean };
  PART_ID: string;
  UNIT_NAME: string;
  GROUP_NAME: string;
  LINE_DESC: string;
  PARTNO: string;
  PART_DESC: string;
  PART_STATUS: string;
  sysDate: string;
  screenName: string;
  unitId: string;
  unitName: string;
  groupId: string;
  groupName: string;
  lineId: string;
  lineDesc: string;
  partId: string;
  partNo: string;
  partDesc: string;
  partStatus: string = 'A';

  constructor() {
    this.formName = '';
    this.currentDate = new Date();
    this.globalParameter = 0;
    this.mode = '';
    this.cursorStyle = 'default';
    this.saveButtonDisabled = true;
    this.fieldsEnabled = {
      GROUP_ID: true,
      PARTNO: true,
      PART_STATUS: true,
      PART_DESC: true,
      LINE_ID: true,
    };
    this.PART_ID = '';
    this.UNIT_NAME = '';
    this.GROUP_NAME = '';
    this.LINE_DESC = '';
    this.PARTNO = '';
    this.PART_DESC = '';
    this.PART_STATUS = '';
    this.sysDate = new Date().toISOString().split('T')[0];
    this.screenName = 'TMM022';
    this.unitId = '';
    this.unitName = '';
    this.groupId = '';
    this.groupName = '';
    this.lineId = '';
    this.lineDesc = '';
    this.partId = '';
    this.partNo = '';
    this.partDesc = '';
  }
}
