package com.lyra.repository;

import com.lyra.bean.Entry.Entry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntryRepository extends JpaRepository<Entry, String>
{
}
