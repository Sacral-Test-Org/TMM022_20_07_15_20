package com.example.TMM022_fmb.controller;

import com.example.TMM022_fmb.dto.PartDTO;
import com.example.TMM022_fmb.service.PartService;
import com.example.TMM022_fmb.service.GroupService;
import com.example.TMM022_fmb.dto.LOVData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/parts")
public class PartController {

    @Autowired
    private PartService partService;

    @Autowired
    private GroupService groupService;

    @PostMapping("/saveOrUpdate")
    public ResponseEntity<Part> saveOrUpdatePart(@RequestBody PartDTO partDTO) {
        Part part = partService.saveOrUpdatePart(partDTO);
        return ResponseEntity.ok(part);
    }

    @GetMapping("/validatePartDesc")
    public boolean validatePartDesc(@RequestParam String partDesc) {
        return partService.validatePartDesc(partDesc);
    }

    @PostMapping("/clearPartDesc")
    public void clearPartDesc() {
        partService.clearPartDesc();
    }

    @PostMapping("/validateFields")
    public boolean validateFields(@RequestParam String unitId, @RequestParam String unitName, @RequestParam String groupId, @RequestParam String groupName, @RequestParam String lineId, @RequestParam String lineDesc, @RequestParam String partNo, @RequestParam String partDesc, @RequestParam int globalParam) {
        return partService.validateFields(unitId, unitName, groupId, groupName, lineId, lineDesc, partNo, partDesc, globalParam);
    }

    @GetMapping("/validateGroupId")
    public boolean validateGroupId(@RequestParam String groupId, @RequestParam String groupName, @RequestParam String unitId) {
        return groupService.validateGroupId(groupId, groupName, unitId);
    }

    @GetMapping("/getPartNumbers")
    public List<PartDTO> getPartNumbers(@RequestParam String mode) {
        return partService.getPartNumbers(mode);
    }

    @GetMapping("/validatePartNumber")
    public boolean validatePartNumber(@RequestParam String partNumber) {
        return partService.validatePartNumber(partNumber);
    }

    @GetMapping("/getLovData")
    public List<LOVData> getLovData(@RequestParam int globalParameter) {
        return partService.getLovData(globalParameter);
    }

    @GetMapping("/validateUnitId")
    public boolean validateUnitId(@RequestParam String unitId, @RequestParam String unitName, @RequestParam int globalParameter) {
        return partService.validateUnitId(unitId, unitName, globalParameter);
    }
}
