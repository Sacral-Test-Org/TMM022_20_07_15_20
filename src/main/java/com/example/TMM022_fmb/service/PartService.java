package com.example.TMM022_fmb.service;

import com.example.TMM022_fmb.repository.PartRepository;
import com.example.TMM022_fmb.model.Part;
import com.example.TMM022_fmb.dto.PartDTO;
import com.example.TMM022_fmb.repository.GroupRepository;
import com.example.TMM022_fmb.dto.LOVData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PartService {

    @Autowired
    private PartRepository partRepository;

    @Autowired
    private GroupRepository groupRepository;

    public Part saveOrUpdatePart(PartDTO partDTO) {
        Part part = new Part();
        part.setUnitId(partDTO.getUnitId());
        part.setGroupId(partDTO.getGroupId());
        part.setPartNo(partDTO.getPartNo());
        part.setPartId(partDTO.getPartId());
        part.setPartStatus(partDTO.getPartStatus());
        part.setPartDesc(partDTO.getPartDesc());
        part.setLineId(partDTO.getLineId());

        boolean partExists = partRepository.existsByUnitIdAndGroupIdAndLineIdAndPartNo(
                partDTO.getUnitId(), partDTO.getGroupId(), partDTO.getLineId(), partDTO.getPartNo());

        if (partExists) {
            throw new RuntimeException("Part already exists");
        }

        return partRepository.save(part);
    }

    public boolean validatePartDesc(String partDesc) {
        return partDesc != null && !partDesc.trim().isEmpty();
    }

    public void clearPartDesc() {
        // Logic to clear the PART_DESC field
    }

    public boolean validateFields(String unitId, String unitName, String groupId, String groupName, String lineId, String lineDesc, String partNo, String partDesc, int globalParam) {
        if (unitId == null || unitId.trim().isEmpty() || unitName == null || unitName.trim().isEmpty()) {
            throw new RuntimeException("Unit ID and Unit Name should not be null");
        }
        if (groupId == null || groupId.trim().isEmpty() || groupName == null || groupName.trim().isEmpty()) {
            throw new RuntimeException("Group ID and Group Name should not be null");
        }
        if (lineId == null || lineId.trim().isEmpty() || lineDesc == null || lineDesc.trim().isEmpty()) {
            throw new RuntimeException("Line ID and Line Name should not be null");
        }
        if (globalParam == 0) {
            if (partNo == null || partNo.trim().isEmpty() || partDesc == null || partDesc.trim().isEmpty()) {
                throw new RuntimeException("Part No and Part Description should not be null");
            }
        } else if (globalParam == 1) {
            if (partNo == null || partNo.trim().isEmpty() || partDesc == null || partDesc.trim().isEmpty()) {
                throw new RuntimeException("Part No and Part Description should not be null");
            }
        }
        return true;
    }

    public boolean validateGroupId(String groupId, String groupName, String unitId) {
        return groupRepository.validateGroupId(groupId, groupName, unitId);
    }

    public List<PartDTO> getPartNumbers(String mode) {
        List<Part> parts = partRepository.findPartNumbers(mode);
        return parts.stream().map(part -> new PartDTO(part.getPartNo(), part.getPartDesc())).toList();
    }

    public boolean validatePartNumber(String partNumber) {
        return partRepository.existsByPartNumber(partNumber);
    }

    public List<LOVData> getLovData(int globalParameter) {
        return partRepository.fetchLovData(globalParameter);
    }

    public boolean validateUnitId(String unitId, String unitName, int globalParameter) {
        return partRepository.validateUnitId(unitId, unitName, globalParameter);
    }
}