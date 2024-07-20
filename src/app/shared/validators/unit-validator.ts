import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PartService } from '../services/part.service';

@Injectable({
  providedIn: 'root'
})
export class UnitValidator {
  constructor(private partService: PartService) {}

  validate(unitId: string, unitName: string, globalParameter: number): Observable<boolean> {
    return this.partService.validateUnitId(unitId, unitName, globalParameter);
  }
}
