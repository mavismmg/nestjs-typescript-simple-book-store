import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livro } from './livro.model';
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {
  }
  @Get()
  async getAll(): Promise<Livro[]> {
    return this.livrosService.getAll();
  }
  @Get(':id')
  async getOne(@Param() params: Livro): Promise<Livro> {
    return this.livrosService.getOne(params.id);
  }
  @Post()
  async create(@Body() livro: Livro) {
    this.livrosService.create(livro);
  }
  @Put()
  async change(@Body() livro: Livro): Promise<[number, Livro[]]> {
    return this.livrosService.change(livro);
  }
  @Delete(':id')
  async delete(@Param() params: Livro) {
    this.livrosService.delete(params.id);
  }
}