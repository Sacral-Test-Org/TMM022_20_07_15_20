import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Part } from '../models/part.model';
import { LOVData } from '../models/lov-data.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  private apiUrl = `${environment.apiUrl}/parts`;

  constructor(private http: HttpClient) {}

  saveOrUpdatePart(part: Part): Observable<any> {
    if (part.PART_ID) {
      return this.http.put(`${this.apiUrl}/${part.PART_ID}`, part);
    } else {
      return this.http.post(this.apiUrl, part);
    }
  }

  validatePartDesc(partDesc: string): boolean {
    return partDesc.trim().length > 0;
  }

  clearPartDesc(): void {
    // Logic to clear the PART_DESC field
  }

  validateFields(unitId: string, unitName: string, groupId: string, groupName: string, lineId: string, lineDesc: string, partNo: string, partDesc: string, globalParam: number): boolean {
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
      if (!partNo || !partDesc) {
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

  getPartNumbers(mode: string): Observable<Part[]> {
    const url = mode === 'edit' ? `${this.apiUrl}/edit` : `${this.apiUrl}/view`;
    return this.http.get<Part[]>(url);
  }

  validatePartNumber(partNumber: string): Observable<boolean> {
    const url = `${this.apiUrl}/validate/${partNumber}`;
    return this.http.get<boolean>(url);
  }

  getLovData(globalParameter: number): Observable<LOVData[]> {
    const url = `${this.apiUrl}/lov/${globalParameter}`;
    return this.http.get<LOVData[]>(url);
  }

  validateUnitId(unitId: string, unitName: string, globalParameter: number): Observable<boolean> {
    const url = `${this.apiUrl}/validateUnit/${unitId}/${unitName}/${globalParameter}`;
    return this.http.get<boolean>(url);
  }
}
