package com.lyra;

import com.lyra.transformer.UniversalTransformer;
import org.dozer.DozerBeanMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.DependsOn;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class LyraApplication {

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder()
	{
		return new BCryptPasswordEncoder();
	}

	@Bean
	@DependsOn("dozerBeanMapper")
	public UniversalTransformer universalTransformer() {
		return new UniversalTransformer(dozerBeanMapper());
	}

	@Bean
	public DozerBeanMapper dozerBeanMapper() {
		List<String> mappingFiles = new ArrayList<>();
		mappingFiles.add("mapping.dzr.xml");
		mappingFiles.add("mapping-dto.dzr.xml");
		DozerBeanMapper mapper = new DozerBeanMapper();
		mapper.setMappingFiles(mappingFiles);
		return mapper;
	}

	public static void main(String[] args) {
		SpringApplication.run(LyraApplication.class, args);
	}
}
