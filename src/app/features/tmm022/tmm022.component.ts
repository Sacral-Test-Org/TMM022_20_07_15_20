import { Component, OnInit } from '@angular/core';
import { FormInitializationService } from 'src/app/core/services/form-initialization.service';
import { PartService } from 'src/app/shared/services/part.service';
import { GlobalParameters } from 'src/app/shared/constants/global-parameters';
import { PartValidator } from 'src/app/shared/validators/part-validator';
import { Observable } from 'rxjs';
import { FormState } from 'src/app/shared/models/form-state.model';
import { LOVData } from 'src/app/shared/models/lov-data.model';

@Component({
  selector: 'app-tmm022',
  templateUrl: './tmm022.component.html',
  styleUrls: ['./tmm022.component.css']
})
export class Tmm022Component implements OnInit {
  constructor(
    private formInitializationService: FormInitializationService,
    private partService: PartService,
    private partValidator: PartValidator
  ) {}

  ngOnInit(): void {
    this.formInitializationService.initializeForm();
  }

  onSave(): void {
    // Logic to save the current data entered in the form
  }

  onClear(): void {
    this.clearForm();
  }

  onEdit(): void {
    this.onEditButtonClick();
  }

  onExit(): void {
    this.onExitButtonClick();
  }

  clearForm(): void {
    // Clear the form fields without validation
    // Enable the 'UNIT_ID' field if it is disabled
    // Set the 'PART_STATUS' field to 'A'
    // Call the `whenNewFormInstance` method from `FormInitializationService`
    this.formInitializationService.whenNewFormInstance();
  }

  onExitButtonClick(): void {
    const confirmation = confirm('Do you want to exit?');
    this.handleExitConfirmation(confirmation ? 'Yes' : 'No');
  }

  handleExitConfirmation(confirmation: string): void {
    if (confirmation === 'Yes') {
      // Logic to close the application without saving any unsaved changes
    } else {
      // Logic to close the alert and keep the user in the application
    }
  }

  onEditButtonClick(): void {
    // Logic to handle the click event of the "Edit" button
    // Clear any unsaved changes, reinitialize the form, set the part status to 'A', set a global parameter to 1, change the mode to 'Edit Mode', and disable the "Edit" button if it was initially enabled
    this.formInitializationService.reinitializeForm();
    GlobalParameters.setGlobalParameter(1);
    // Change mode to 'Edit Mode'
  }

  validateAndSaveOrUpdatePartRecord(): void {
    // Validate all required fields
    // If any field is empty, display an appropriate message and prevent the save operation
    // If all fields are filled, prompt the user for confirmation
    // If the user confirms, call the saveOrUpdatePart method from partService
    // After a successful save or update, display a success message and reset the form using formInitializationService
  }

  displayFields(): void {
    // Display the fields for unit, group, line, and part information with the specified properties (read-only where applicable)
  }

  onPartDescDoubleClick(): void {
    // Trigger the same actions as a single click
  }

  onSaveButtonClick(): void {
    // If the SAVE button is enabled and the PART_DESC field is not empty, disable the SAVE button and clear the PART_DESC field
  }

  onNextItem(): void {
    // Perform validations for UNIT_ID, UNIT_NAME, GROUP_ID, GROUP_NAME, LINE_ID, LINE_DESC, PARTNO, PART_DESC, and PART_ID based on the global parameter
  }

  onGroupIdDoubleClick(): void {
    const globalParameter = GlobalParameters.getGlobalParameter();
    if (globalParameter === 0) {
      this.partService.showLov('selectGroupId');
    } else if (globalParameter === 1) {
      this.partService.showLov('editGroupId');
    }
    // Navigate to the Line ID field upon selection
  }

  onGroupIdClick(): void {
    // Check if the Save button is enabled and disable it if true
    // Clear the fields: Group ID, Group Name, Line ID, Line Description, Part ID, Part Number, Part Description
    // Navigate back to the Group ID field
  }

  onNextItemNavigation(): void {
    // Check if the Unit ID or Unit Name fields are empty. If true, display an error message and navigate back to the Unit ID field
    // Check if the Group ID or Group Name fields are empty. If true, display an error message and navigate back to the Group ID field
    // If all required fields are filled, navigate to the Line ID field
  }

  validateGroupId(): void {
    const globalParameter = GlobalParameters.getGlobalParameter();
    if (globalParameter === 0) {
      this.partService.validateGroupId('MESGroupMaster');
    } else if (globalParameter === 1) {
      this.partService.validateGroupId('MESGroupMasterAndHPMPartMaster');
    }
    // If the Group ID and Group Name are not valid, display an error message
  }

  validatePartStatus(partStatus: string): void {
    if (!this.partValidator.validatePartStatus(partStatus)) {
      alert('PART_STATUS CANNOT BE NULL');
      // Return focus to the "Part Status" field
    }
  }

  validateRelatedFields(unitId: string, unitName: string, groupId: string, groupName: string, lineId: string, lineDesc: string, partNo: string, partStatus: string): void {
    const globalParameter = GlobalParameters.getGlobalParameter();
    if (!this.partValidator.validateRelatedFields(unitId, unitName, groupId, groupName, lineId, lineDesc, partNo, partStatus)) {
      // Display the corresponding error message and return focus to the appropriate field
    } else {
      // Enable the "Save" button and move focus to it
    }
  }

  onPartNumberDoubleClick(): void {
    const mode = GlobalParameters.getGlobalParameter() === 0 ? 'view' : 'edit';
    this.partService.getPartNumbers(mode).subscribe(parts => {
      // Display the list of part numbers to the user
    });
  }

  onPartNumberClick(): void {
    // Clear the part number, part ID, and part description fields
  }

  onFieldExit(): void {
    // Validate that all required fields are filled and that the part number exists in the database
    // If any validation fails, display an error message
  }

  onUnitIdDoubleClick(event: MouseEvent): void {
    const globalParameter = GlobalParameters.getGlobalParameter();
    this.partService.getLovData(globalParameter).subscribe(lovData => {
      // Display the LOV data to the user
    });
    // Navigate to the Group ID field upon selection
  }

  onUnitIdClick(event: MouseEvent): void {
    // Disable the Save button if enabled
    // Clear specified fields if they are not empty
    // Navigate back to the Unit ID field
  }

  onUnitIdFieldExit(event: FocusEvent): void {
    // Check if Unit ID or Unit Name is empty. Display an error message if either is empty and return to the Unit ID field
    // If both are filled, navigate to the Group ID field
  }

  validateUnitId(unitId: string, unitName: string): Observable<boolean> {
    const globalParameter = GlobalParameters.getGlobalParameter();
    return this.partService.validateUnitId(unitId, unitName, globalParameter);
  }

  handleLineIdDoubleClick(event: MouseEvent): void {
    const globalParameter = GlobalParameters.getGlobalParameter();
    if (globalParameter === 0) {
      this.partService.fetchLineLov().subscribe(lovData => {
        // Display the LOV data to the user
      });
    } else if (globalParameter === 1) {
      this.partService.fetchEditLineLov().subscribe(lovData => {
        // Display the LOV data to the user
      });
    }
    // Navigate to PARTNO field upon selection
  }

  handleLineIdClick(event: MouseEvent): void {
    // Disable SAVE button if enabled
    // Clear LINE_ID, LINE_DESC, PART_ID, PARTNO, and PART_DESC if not null
    // Navigate back to LINE_ID field
  }

  validateAndNavigate(): void {
    // Validate UNIT_ID, UNIT_NAME, GROUP_ID, GROUP_NAME, LINE_ID, and LINE_DESC
    // If any field is null, display error and navigate to respective field
    // If valid, navigate to PARTNO field
  }

  validateLineId(): void {
    this.partService.validateLineIdInDb().subscribe(isValid => {
      if (!isValid) {
        // Display error if not found
      }
    });
  }
}
