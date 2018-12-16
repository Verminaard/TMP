package com.lyra.service;

import com.lyra.bean.Entry.Entry;
import com.lyra.bean.common.ApplicationUser;

import java.util.List;

public interface EntryService
{

    List<Entry> getAllEntry();

    Entry getEntry(String id);

    Entry saveEntry(ApplicationUser user, Entry entry);

    void deleteEntry(String id);

}
