package com.example.TMM022_fmb.dto;

public class UnitDTO {
    private String unitId;
    private String unitName;

    public UnitDTO() {}

    public UnitDTO(String unitId, String unitName) {
        this.unitId = unitId;
        this.unitName = unitName;
    }

    public String getUnitId() {
        return unitId;
    }

    public void setUnitId(String unitId) {
        this.unitId = unitId;
    }

    public String getUnitName() {
        return unitName;
    }

    public void setUnitName(String unitName) {
        this.unitName = unitName;
    }
}
