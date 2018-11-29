package com.lyra.service;

import com.lyra.bean.Entry.Entry;

import java.util.List;

public interface EntryService
{

    List<Entry> getAllEntry();

    Entry getEntry(String id);

    Entry saveEntry(Entry entry);

    void deleteEntry(String id);

}
