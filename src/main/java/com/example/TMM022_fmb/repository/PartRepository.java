package com.example.TMM022_fmb.repository;

import com.example.TMM022_fmb.model.Part;
import com.example.TMM022_fmb.model.LOVData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartRepository extends JpaRepository<Part, String> {

    @Override
    Part save(Part part);

    @Query("SELECT COUNT(*) > 0 FROM MES_GROUP_MASTER WHERE GROUP_STATUS='O' AND GROUP_SECTION=:unitId AND GROUP_ID=:groupId AND GROUP_NAME=:groupName")
    boolean validateGroupId(@Param("groupId") String groupId, @Param("groupName") String groupName, @Param("unitId") String unitId);

    @Query("SELECT p FROM Part p WHERE p.unitId = :unitId AND p.groupId = :groupId AND p.lineId = :lineId ORDER BY p.partId ASC")
    List<Part> findPartNumbers(@Param("unitId") String unitId, @Param("groupId") String groupId, @Param("lineId") String lineId);

    @Query("SELECT COUNT(*) > 0 FROM Part p WHERE p.partNumber = :partNumber")
    boolean existsByPartNumber(@Param("partNumber") String partNumber);

    @Query("SELECT new com.example.TMM022_fmb.model.LOVData(p.segmentCode, p.segmentName) FROM MES_UNIT_MASTER p ORDER BY p.segmentCode ASC")
    List<LOVData> fetchLovData(@Param("globalParameter") int globalParameter);

    @Query("SELECT COUNT(*) > 0 FROM MES_UNIT_MASTER WHERE SEGMENT_CODE = :unitId AND SEGMENT_NAME = :unitName")
    boolean validateUnitId(@Param("unitId") String unitId, @Param("unitName") String unitName, @Param("globalParameter") int globalParameter);
}
