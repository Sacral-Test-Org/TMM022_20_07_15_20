import { Injectable } from '@angular/core';
import { FormState } from '../models/form-state.model';

@Injectable({
  providedIn: 'root'
})
export class PartValidator {

  validatePartDesc(partDesc: string): boolean {
    // Validate the PART_DESC field
    return partDesc.trim().length > 0;
  }

  validateFields(unitId: string, unitName: string, groupId: string, groupName: string, lineId: string, lineDesc: string, partNo: string, partDesc: string, globalParam: number): boolean {
    // Perform validations for UNIT_ID, UNIT_NAME, GROUP_ID, GROUP_NAME, LINE_ID, LINE_DESC, PARTNO, PART_DESC, and PART_ID based on the global parameter
    if (!unitId || !unitName) {
      alert('Unit ID and Unit Name should not be null');
      return false;
    }
    if (!groupId || !groupName) {
      alert('Group ID and Group Name should not be null');
      return false;
    }
    if (!lineId || !lineDesc) {
      alert('Line ID and Line Name should not be null');
      return false;
    }
    if (globalParam === 0) {
      if (!partNo) {
        alert('Part No and Part Description should not be null');
        return false;
      }
    } else if (globalParam === 1) {
      if (!partNo || !partDesc) {
        alert('Part No and Part Description should not be null');
        return false;
      }
    }
    return true;
  }

  validatePartStatus(partStatus: string): boolean {
    // Check if the partStatus is empty. If empty, return false. If not empty, return true.
    if (!partStatus) {
      alert('PART_STATUS CANNOT BE NULL');
      return false;
    }
    return true;
  }

  validateRelatedFields(unitId: string, unitName: string, groupId: string, groupName: string, lineId: string, lineDesc: string, partNo: string, partStatus: string): boolean {
    // Validate each field based on the provided criteria. If any field is empty, return false. If all fields are valid, return true.
    if (!unitId || !unitName) {
      alert('Unit ID and Unit Name should not be null');
      return false;
    }
    if (!groupId || !groupName) {
      alert('Group ID and Group Name should not be null');
      return false;
    }
    if (!lineId || !lineDesc) {
      alert('Line ID and Line Name should not be null');
      return false;
    }
    if (!partNo || !partStatus) {
      alert('Part No and Part Description should not be null');
      return false;
    }
    return true;
  }

  validateRequiredFields(formState: FormState): boolean {
    // Check that all required fields (unit ID, unit name, group ID, group name, line ID, line description, part number, and part description) are filled.
    const { unitId, unitName, groupId, groupName, lineId, lineDesc, partNo, partDesc } = formState;
    if (!unitId || !unitName || !groupId || !groupName || !lineId || !lineDesc || !partNo || !partDesc) {
      alert('All required fields must be filled');
      return false;
    }
    return true;
  }

  validatePartNumberExistence(partNumber: string): boolean {
    // Check that the part number exists in the database.
    // This is a placeholder for actual database validation logic.
    // In a real application, you would make an HTTP request to the backend to validate the part number.
    const partNumberExists = true; // Assume the part number exists for this example.
    if (!partNumberExists) {
      alert('The part number does not exist');
      return false;
    }
    return true;
  }
}
