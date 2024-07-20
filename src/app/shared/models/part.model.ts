export class Part {
  PART_ID: string;
  UNIT_NAME: string;
  GROUP_NAME: string;
  LINE_DESC: string;
  PARTNO: string;
  PART_DESC: string;
  PART_STATUS: string;

  constructor(
    PART_ID: string,
    UNIT_NAME: string,
    GROUP_NAME: string,
    LINE_DESC: string,
    PARTNO: string,
    PART_DESC: string,
    PART_STATUS: string
  ) {
    this.PART_ID = PART_ID;
    this.UNIT_NAME = UNIT_NAME;
    this.GROUP_NAME = GROUP_NAME;
    this.LINE_DESC = LINE_DESC;
    this.PARTNO = PARTNO;
    this.PART_DESC = PART_DESC;
    this.PART_STATUS = PART_STATUS;
  }
}