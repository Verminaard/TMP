package com.lyra.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.lyra.bean.Entry.EntryStatus;
import com.lyra.bean.Entry.EntryType;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EntryDTO
{
    private UserShortDTO applicationUser;

    private String entryName;

    private EntryType entryType;

    private EntryStatus entryStatus;

    private int rating;

    private String description;

    private String tags;
}
