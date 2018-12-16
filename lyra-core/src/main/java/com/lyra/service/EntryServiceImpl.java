package com.lyra.service;

import com.lyra.bean.Entry.Entry;
import com.lyra.bean.Entry.EntryStatus;
import com.lyra.bean.common.ApplicationUser;
import com.lyra.repository.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntryServiceImpl implements EntryService
{
    private final EntryRepository entryRepository;

    @Autowired
    public EntryServiceImpl(EntryRepository entryRepository)
    {
        this.entryRepository = entryRepository;
    }

    @Override
    public List<Entry> getAllEntry()
    {
       return entryRepository.findAll();
    }

    @Override
    public Entry getEntry(String id)
    {
        return entryRepository.findById(id).orElse(null);
    }

    @Override
    public Entry saveEntry(ApplicationUser user, Entry entry)
    {
        Entry newEntry = entry;

        entry.setEntryStatus(EntryStatus.created);
        newEntry.setApplicationUser(user);

        return entryRepository.save(entry);
    }

    @Override
    public void deleteEntry(String id)
    {
        Entry entry = entryRepository.findById(id).orElse(null);
        if (entry == null) {
            //ex throw
        }
        assert entry != null;
        entry.setDeleted(true);
        entryRepository.save(entry);
    }
}
