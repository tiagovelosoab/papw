package br.com.fugideia.papw;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProdutoRest {

    @Autowired
    private ProdutoRepository repository;

    @PostMapping("/produto")
    public ResponseEntity<Produto> salvar(@RequestBody Produto produto){
        Produto retorno=repository.save(produto);
        return ResponseEntity.ok(retorno);
    }

    @PutMapping("/produto")
    public ResponseEntity<Produto> atualizar(@RequestBody Produto produto){
        if(produto.getId()==null){
            return ResponseEntity.badRequest().build();
        }
        else if(repository.findById(produto.getId()).get()==null){
            return ResponseEntity.badRequest().build();
        }
        Produto retorno=repository.save(produto);
        return ResponseEntity.ok(retorno);
    }

    @GetMapping("/produto")
    public ResponseEntity<List<Produto>> getProduto(){
        return ResponseEntity.ok(repository.findAll());
    }

    @GetMapping("/produto/{id}")
    public ResponseEntity<Produto> getProdutoID(@PathVariable("id") Integer id){
        Produto retorno=repository.findById(id).get();
        if(retorno==null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(retorno);
    }

    @DeleteMapping("/produto/{id}")
    public ResponseEntity<Produto> deleteProdutoID(@PathVariable("id") Integer id){
        Produto retorno=repository.findById(id).get();
        if(retorno==null){
            return ResponseEntity.notFound().build();
        }
        //repository.deleteById(id);
        repository.delete(retorno);
        return ResponseEntity.ok(retorno);
    }
}
