import { Injectable , UnauthorizedException} from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { LogDTO } from './dto/log.dto';
import { PrismaService } from 'src/database/PrismaService';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

   constructor(private prisma: PrismaService, private JwtService: JwtService){}



    async createUser(data: UserDTO){

        const userExists = await this.prisma.user.findFirst({
            where: {
                usuario: data.usuario
            }
        })

        if(userExists){
            throw new Error("Usuário já existe");
        }

        const user = await this.prisma.user.create({
            data,
        });

        return user;
    }

    async getAll(){
        return this.prisma.user.findMany();
    }

    async update(id: string, data: UserDTO){
        const userId = parseInt(id, 10);

        const userExists = await this.prisma.user.findUnique({
            where: {
                id: userId
            }
        })


        if(userExists){
            throw new Error("Usuário não existe");
        }

        const updatedUser = await this.prisma.user.update({
            data,
            where: {
                id: userId
            }
        })

        return updatedUser;
        
    }

    async delete(id: string){
        const userId = parseInt(id, 10);

        const userExists = await this.prisma.user.findUnique({
            where: {
                id: userId
            }
        })

        if(!userExists){
            throw new Error("Usuário não existe");
        }

        return await this.prisma.user.delete({
            where: {
                id: userId
            }
        })
    }

    async login(data: LogDTO){
        const users = await this.prisma.user.findMany({
            where: { usuario: data.usuario },
          });

        if (!users || users.length === 0 || users.some(user => user.senha !== data.senha)) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        const user = users[0];

        const tokenAcesso = this.tokenAcesso(user.id, user.usuario);
        return {
            tokenAcesso,
            userId: user.id,
            usuario: user.usuario,
        };
    }

    private tokenAcesso(userId: number, name: string): string {
        const payload = { userId, name };
        return this.JwtService.sign(payload);
      }

}
